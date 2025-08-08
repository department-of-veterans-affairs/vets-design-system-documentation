#!/bin/bash

# Monthly Report Helper Script
# Makes it easy to process VA Design System Looker Studio reports

set -e  # Exit on any error

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[0;33m'
NC='\033[0m' # No Color

echo -e "${BLUE}📊 VA Design System - Monthly Report Processor${NC}"
echo "=================================================="

# Check if file argument provided
if [ $# -eq 0 ]; then
    echo -e "${RED}❌ No PDF file provided${NC}"
    echo ""
    echo -e "${YELLOW}Usage:${NC}"
    echo "  $0 path/to/report.pdf [YYYY-MM]"
    echo ""
    echo -e "${YELLOW}Examples:${NC}"
    echo "  $0 ~/Downloads/VA_Design_System_Report.pdf 2025-06"
    echo "  $0 ./monthly-report.pdf  # Uses current month"
    echo ""
    echo -e "${YELLOW}Note: Use correct YYYY-MM format:${NC}"
    echo "  2025-06 for June 2025, 2025-07 for July 2025, etc."
    echo ""
    exit 1
fi

PDF_FILE="$1"
REPORT_DATE="${2:-$(date +%Y-%m)}"  # Use current year-month if not provided

# Check if file exists
if [ ! -f "$PDF_FILE" ]; then
    echo -e "${RED}❌ PDF file not found: $PDF_FILE${NC}"
    exit 1
fi

# Check dependencies
echo -e "${BLUE}🔍 Checking dependencies...${NC}"

# Check ImageMagick
if ! command -v magick &> /dev/null && ! command -v convert &> /dev/null; then
    echo -e "${RED}❌ ImageMagick not found${NC}"
    echo -e "${YELLOW}Install with: brew install imagemagick${NC}"
    exit 1
fi

# Check Ghostscript
if ! command -v gs &> /dev/null; then
    echo -e "${RED}❌ Ghostscript not found${NC}"
    echo -e "${YELLOW}Install with: brew install ghostscript${NC}"
    exit 1
fi

# Check Node.js
if ! command -v node &> /dev/null; then
    echo -e "${RED}❌ Node.js not found${NC}"
    echo -e "${YELLOW}Install Node.js from: https://nodejs.org/${NC}"
    exit 1
fi

echo -e "${GREEN}✅ All dependencies found${NC}"

# Get absolute path to PDF
PDF_PATH=$(realpath "$PDF_FILE")

# Show processing details
echo ""
echo -e "${BLUE}📋 Processing Details:${NC}"
echo "  📁 PDF File: $PDF_PATH"
echo "  📅 Report Date: $REPORT_DATE"
echo "  🎯 Output: looker-report-$REPORT_DATE.png"

# Confirm processing
echo ""
read -p "Proceed with processing? (y/N): " -n 1 -r
echo
if [[ ! $REPLY =~ ^[Yy]$ ]]; then
    echo -e "${YELLOW}Processing cancelled${NC}"
    exit 0
fi

# Run the processing script
echo ""
echo -e "${BLUE}🔄 Processing report...${NC}"

if node scripts/process-monthly-report.js "$PDF_PATH" "$REPORT_DATE"; then
    echo ""
    echo -e "${GREEN}🎉 Success! Monthly report processed successfully${NC}"
    echo ""
    echo -e "${BLUE}📊 What's Next:${NC}"
    echo "  1. View the report on your metrics dashboard at /about/metrics/"
    echo "  2. Commit and push changes to update the live site:"
    echo -e "     ${YELLOW}git add .${NC}"
    echo -e "     ${YELLOW}git commit -m \"Add monthly report for $REPORT_DATE\"${NC}"
    echo -e "     ${YELLOW}git push${NC}"
    echo ""
    echo -e "${GREEN}Your monthly analytics report is now ready! 🚀${NC}"
else
    echo ""
    echo -e "${RED}❌ Processing failed${NC}"
    echo "Check the error messages above and try again."
    exit 1
fi
