/**
 * Auto-generate blog post metadata from HTML files
 * 
 * This script scans the content folder for HTML files and generates
 * a metadata file that can be imported by content.js
 * 
 * Usage: node scripts/generate-blog-metadata.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content');
const outputFile = path.join(__dirname, '../src/constants/blog-metadata.json');

// Files to exclude from blog post generation
const EXCLUDED_FILES = ['header.html'];

/**
 * Extract title from HTML content
 */
function extractTitle(html) {
  const h1Match = html.match(/<h1[^>]*>(.*?)<\/h1>/i);
  if (h1Match) {
    return h1Match[1].replace(/<[^>]*>/g, '').trim();
  }
  
  const titleMatch = html.match(/<title[^>]*>(.*?)<\/title>/i);
  if (titleMatch) {
    return titleMatch[1].replace(/<[^>]*>/g, '').trim();
  }
  
  return 'Untitled Post';
}

/**
 * Extract first paragraph or content for excerpt
 */
function extractExcerpt(html) {
  // Remove HTML tags and get first meaningful text
  const textContent = html
    .replace(/<head[^>]*>[\s\S]*?<\/head>/gi, '')
    .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  // Get first 120 characters
  const excerpt = textContent.substring(0, 120);
  return excerpt.length < textContent.length ? excerpt + '...' : excerpt;
}

/**
 * Extract intro paragraph (first <p> tag)
 */
function extractIntro(html) {
  const pMatch = html.match(/<p[^>]*>(.*?)<\/p>/i);
  if (pMatch) {
    return pMatch[1].replace(/<[^>]*>/g, '').trim();
  }
  return extractExcerpt(html);
}

/**
 * Estimate reading time based on word count
 */
function estimateReadTime(html) {
  const textContent = html
    .replace(/<[^>]*>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  
  const wordCount = textContent.split(/\s+/).length;
  const wordsPerMinute = 200;
  const minutes = Math.ceil(wordCount / wordsPerMinute);
  
  return `${minutes} min read`;
}

/**
 * Generate slug from filename
 */
function generateSlug(filename) {
  return filename
    .replace('.html', '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Detect category from content or filename
 */
function detectCategory(html, filename) {
  const content = html.toLowerCase();
  
  if (content.includes('fastapi') || filename.includes('fastapi')) return 'FASTAPI';
  if (content.includes('django') || filename.includes('django')) return 'DJANGO';
  if (content.includes('celery') || content.includes('dramatiq') || content.includes('huey')) return 'ASYNC';
  if (content.includes('sqlalchemy') || content.includes('sqlmodel')) return 'DATABASE';
  if (content.includes('docker') || content.includes('kubernetes')) return 'DEVOPS';
  if (content.includes('redis') || content.includes('cache')) return 'CACHING';
  
  return 'BACKEND';
}

/**
 * Scan content directory and generate metadata
 */
function generateBlogMetadata() {
  console.log('🔍 Scanning content directory...');
  
  // Read all HTML files
  const files = fs.readdirSync(contentDir)
    .filter(file => file.endsWith('.html') && !EXCLUDED_FILES.includes(file));
  
  console.log(`📄 Found ${files.length} HTML files`);
  
  const metadata = files.map(filename => {
    console.log(`   Processing: ${filename}`);
    
    const filePath = path.join(contentDir, filename);
    const html = fs.readFileSync(filePath, 'utf-8');
    
    const title = extractTitle(html);
    const slug = generateSlug(filename);
    const category = detectCategory(html, filename);
    const excerpt = extractExcerpt(html);
    const intro = extractIntro(html);
    const readTime = estimateReadTime(html);
    
    return {
      slug,
      category,
      title,
      excerpt,
      date: 'Nov 2025', // Default, can be customized
      readTime,
      intro,
      htmlFile: filename
    };
  });
  
  // Write metadata to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(metadata, null, 2), 'utf-8');
  
  console.log(`✅ Generated metadata for ${metadata.length} posts`);
  console.log(`📝 Metadata saved to: ${outputFile}`);
  
  return metadata;
}

// Run the script
try {
  const metadata = generateBlogMetadata();
  console.log('\n📋 Generated posts:');
  metadata.forEach(post => {
    console.log(`   • ${post.title} (${post.slug})`);
  });
} catch (error) {
  console.error('❌ Error generating blog metadata:', error);
  process.exit(1);
}
