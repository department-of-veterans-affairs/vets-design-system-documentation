require 'json'
require 'net/http'
require 'uri'
require 'time'
require 'html-proofer'

desc "Merge an approved pull request"
task :merge_pr do
  pr_number = ARGV[1]
  
  if pr_number.nil? || pr_number.empty?
    puts "❌ Error: Please provide a PR number"
    puts "Usage: rake merge_pr 4474"
    exit 1
  end

  # Prevent rake from trying to run the PR number as a task
  task pr_number.to_sym do ; end
  puts "🔄 Starting merge process for PR ##{pr_number}..."

  begin
    # Step 1: Get PR information from GitHub API
    puts "\n📋 Fetching PR information..."
    pr_info = fetch_pr_info(pr_number)
    
    if pr_info.nil?
      puts "❌ Error: Could not fetch PR information"
      exit 1
    end

    branch_name = pr_info['head']['ref']
    pr_title = pr_info['title']
    pr_state = pr_info['state']
    
    puts "   Title: #{pr_title}"
    puts "   Branch: #{branch_name}"
    puts "   State: #{pr_state}"

    if pr_state != 'open'
      puts "❌ Error: PR is not open (state: #{pr_state})"
      exit 1
    end

    # Step 2: git pull origin main
    puts "\n🔄 Step 1: Pulling latest changes from main..."
    run_command("git pull origin main")

    # Step 3: git checkout main
    puts "\n🔄 Step 2: Checking out main branch..."
    run_command("git checkout main")

    # Step 4: fetch and merge the PR branch
    puts "\n🔄 Step 3: Fetching and merging PR branch..."
    run_command("git fetch origin #{branch_name}")
    run_command("git merge origin/#{branch_name}")

    # Step 5: git push to main
    puts "\n🔄 Step 4: Pushing merged changes..."
    run_command("git push -u origin main")

    puts "\n✅ Successfully merged PR ##{pr_number}!"
    puts "   Title: #{pr_title}"
    puts "   Branch: #{branch_name}"
    
  rescue StandardError => e
    puts "\n❌ Error during merge process: #{e.message}"
    puts "   You may need to resolve conflicts manually or check your git status"
    exit 1
  end
end

desc "Check PR status and information"
task :check_pr do
  pr_number = ARGV[1]
  
  if pr_number.nil? || pr_number.empty?
    puts "❌ Error: Please provide a PR number"
    puts "Usage: rake check_pr 4474"
    exit 1
  end

  # Prevent rake from trying to run the PR number as a task
  task pr_number.to_sym do ; end
  puts "📋 Checking PR ##{pr_number}..."

  pr_info = fetch_pr_info(pr_number)
  
  if pr_info.nil?
    puts "❌ Error: Could not fetch PR information"
    exit 1
  end

  puts "\n📊 PR Information:"
  puts "   Number: ##{pr_info['number']}"
  puts "   Title: #{pr_info['title']}"
  puts "   Author: #{pr_info['user']['login']}"
  puts "   State: #{pr_info['state']}"
  puts "   Branch: #{pr_info['head']['ref']}"
  puts "   Base: #{pr_info['base']['ref']}"
  puts "   Mergeable: #{pr_info['mergeable']}"
  puts "   Commits: #{pr_info['commits']}"
  puts "   Additions: +#{pr_info['additions']}"
  puts "   Deletions: -#{pr_info['deletions']}"
  puts "   Changed Files: #{pr_info['changed_files']}"
  puts "   Created: #{pr_info['created_at']}"
  puts "   Updated: #{pr_info['updated_at']}"
  
  if pr_info['state'] == 'open' && pr_info['mergeable']
    puts "\n✅ PR is ready to merge!"
  elsif pr_info['state'] != 'open'
    puts "\n⚠️  PR is not open (state: #{pr_info['state']})"
  elsif !pr_info['mergeable']
    puts "\n⚠️  PR has merge conflicts or other issues"
  end
end

desc "Show PRs approved by current user that are ready to merge"
task :ready_to_merge do
  puts "🔍 Finding PRs you've approved that are ready to merge..."
  
  begin
    # Get current user info
    current_user = get_current_user
    if current_user.nil?
      puts "❌ Error: Could not fetch current user information"
      exit 1
    end
    
    puts "   Checking as user: #{current_user['login']}"
    
    # Get open PRs
    open_prs = get_open_prs
    if open_prs.nil? || open_prs.empty?
      puts "\n📭 No open PRs found"
      return
    end
    
    puts "   Found #{open_prs.length} open PR(s)"
    
    ready_prs = []
    
    open_prs.each do |pr|
      puts "\n🔍 Checking PR ##{pr['number']}: #{pr['title']}"
      puts "   State: #{pr['state']}, Mergeable: #{pr['mergeable']}"
      
      unless pr['state'] == 'open'
        puts "   ❌ Skipped: Not open"
        next
      end
      
      # If mergeable is null, fetch detailed PR info
      if pr['mergeable'].nil?
        puts "   🔄 Fetching detailed PR info (mergeable status unknown)..."
        detailed_pr = fetch_pr_info(pr['number'])
        if detailed_pr.nil?
          puts "   ❌ Skipped: Could not fetch detailed PR info"
          next
        end
        pr = detailed_pr
        puts "   Updated mergeable status: #{pr['mergeable']}"
      end
      
      unless pr['mergeable']
        puts "   ❌ Skipped: Not mergeable"
        next
      end
      
      # Check if current user has approved this PR
      reviews = get_pr_reviews(pr['number'])
      if reviews.nil?
        puts "   ❌ Skipped: Could not fetch reviews"
        next
      end
      
      puts "   Found #{reviews.length} review(s)"
      
      # Get the latest review from current user
      user_reviews = reviews.select { |review| review['user']['login'] == current_user['login'] }
      puts "   You have #{user_reviews.length} review(s)"
      
      if user_reviews.empty?
        puts "   ❌ Skipped: You haven't reviewed this PR"
        next
      end
      
      latest_user_review = user_reviews.max_by { |review| Time.parse(review['submitted_at']) }
      puts "   Your latest review: #{latest_user_review['state']} on #{latest_user_review['submitted_at']}"
      
      # Check if user approved and PR is ready
      if latest_user_review && latest_user_review['state'] == 'APPROVED'
        # Check if PR needs more reviews or has blocking reviews
        all_latest_reviews = get_latest_reviews_by_user(reviews)
        blocking_reviews = all_latest_reviews.select { |review| review['state'] == 'CHANGES_REQUESTED' }
        
        puts "   Latest reviews by all users: #{all_latest_reviews.map { |r| "#{r['user']['login']}: #{r['state']}" }.join(', ')}"
        puts "   Blocking reviews: #{blocking_reviews.length}"
        
        if blocking_reviews.empty?
          puts "   ✅ Ready to merge!"
          ready_prs << {
            pr: pr,
            approved_at: latest_user_review['submitted_at']
          }
        else
          puts "   ❌ Skipped: Has blocking reviews"
        end
      else
        puts "   ❌ Skipped: Your latest review is not an approval"
      end
    end
    
    if ready_prs.empty?
      puts "\n📭 No PRs found that you've approved and are ready to merge"
    else
      puts "\n✅ Found #{ready_prs.length} PR(s) ready to merge:"
      puts "=" * 60
      
      ready_prs.sort_by { |item| Time.parse(item[:approved_at]) }.reverse.each do |item|
        pr = item[:pr]
        puts "\n📋 PR ##{pr['number']}: #{pr['title']}"
        puts "   Author: #{pr['user']['login']}"
        puts "   Branch: #{pr['head']['ref']}"
        puts "   You approved: #{Time.parse(item[:approved_at]).strftime('%Y-%m-%d %H:%M')}"
        puts "   Mergeable: #{pr['mergeable'] ? '✅' : '❌'}"
        puts "   Ready to merge: rake merge_pr #{pr['number']}"
      end
    end
    
  rescue StandardError => e
    puts "\n❌ Error fetching PR information: #{e.message}"
    exit 1
  end
end

desc "Show available rake tasks"
task :help do
  puts "\nVets Design System Documentation - Rake Tasks"
  puts "=" * 50
  puts "\nGit & PR Tasks:"
  puts "  rake merge_pr PR_NUMBER     - Merge an approved pull request"
  puts "  rake check_pr PR_NUMBER     - Check PR status and information"
  puts "  rake ready_to_merge         - Show PRs approved by you and ready to merge"
  puts "\nLink Checking Tasks:"
  puts "  rake check_links            - Check internal links only (fast)"
  puts "  rake check_links:internal   - Check internal links only (fast)"
  puts "  rake check_links:external   - Check external links only (slow)"
  puts "  rake check_links:all        - Check all links (internal + external)"
  puts "\nOther:"
  puts "  rake help                   - Show this help message"
  puts "\nExamples:"
  puts "  rake check_pr 4474          - Check status of PR #4474"
  puts "  rake merge_pr 4474          - Merge PR #4474"
  puts "  rake ready_to_merge         - List PRs you've approved that are ready"
  puts "  rake check_links            - Quick internal link check"
  puts "\nNotes:"
  puts "  • Link checking requires building the site first: bundle exec jekyll build"
  puts "  • External link checks can take several minutes"
  puts "  • Always check PR status before merging"
end

# Default task
task default: :help

# =============================================================================
# Link Checking Tasks (html-proofer)
# =============================================================================

namespace :check_links do
  # Common options for html-proofer
  def proofer_options(external: false)
    {
      # Check the built Jekyll site
      assume_extension: '.html',
      
      # Disable external link checking by default (faster)
      disable_external: !external,
      
      # Don't enforce HTTPS for internal development
      enforce_https: external,
      
      # Ignore alt tag issues (handled separately by accessibility testing)
      ignore_empty_alt: true,
      ignore_missing_alt: true,
      
      # Log level
      log_level: :info,
      
      # Ignore common patterns that aren't actual broken links
      ignore_urls: [
        /localhost/,                           # Local development URLs
        /127\.0\.0\.1/,                        # Local IP addresses
        %r{^#},                                # Anchor-only links (page fragments)
        /github\.com.*\/edit\//,               # GitHub edit links (require auth)
        /github\.com.*\/new\//,                # GitHub new file links (require auth)
        /figma\.com/,                          # Figma links (require auth)
        /staging\.va\.gov/,                    # Staging environment
        /dev\.va\.gov/,                        # Dev environment
        %r{/storybook/},                       # Storybook is external to this site
      ],
      
      # Ignore files that are dynamically generated or external
      ignore_files: [
        /_site\/storybook\/.*/,                # Storybook is external
        /_site\/vendor\/.*/,                   # Vendor files
      ],
      
      # Swap URLs to handle defined patterns
      swap_urls: {},
      
      # Typhoeus options for external link checking
      typhoeus: {
        # Reasonable timeouts
        connecttimeout: 10,
        timeout: 30,
        # Follow redirects
        followlocation: true,
        # Some sites block default user agents
        headers: {
          'User-Agent' => 'Mozilla/5.0 (compatible; VA-Design-System-Link-Checker)'
        },
      },
      
      # Hydra concurrency settings
      hydra: { max_concurrency: 25 },
    }
  end

  desc "Check internal links only (fast)"
  task :internal do
    puts "🔗 Checking internal links in _site/..."
    puts "   This checks for broken internal links, missing images, and anchor references."
    puts ""
    
    unless Dir.exist?('_site')
      puts "❌ Error: _site directory not found. Run 'bundle exec jekyll build' first."
      exit 1
    end
    
    options = proofer_options(external: false)
    
    begin
      HTMLProofer.check_directory('./_site', options).run
      puts "\n✅ Internal link check complete! No broken links found."
    rescue StandardError => e
      puts "\n❌ Link check failed with errors."
      exit 1
    end
  end

  desc "Check external links only (slow, use sparingly)"
  task :external do
    puts "🌐 Checking external links in _site/..."
    puts "   This checks that external URLs are reachable."
    puts "   ⚠️  This can take several minutes and may be rate-limited."
    puts ""
    
    unless Dir.exist?('_site')
      puts "❌ Error: _site directory not found. Run 'bundle exec jekyll build' first."
      exit 1
    end
    
    options = proofer_options(external: true)
    # Only check links, not images/scripts for external check
    options[:checks] = ['Links']
    
    begin
      HTMLProofer.check_directory('./_site', options).run
      puts "\n✅ External link check complete! No broken links found."
    rescue StandardError => e
      puts "\n❌ Link check failed with errors."
      exit 1
    end
  end

  desc "Check all links (internal and external)"
  task :all do
    puts "🔗 Checking all links in _site/..."
    puts "   This checks internal links, external URLs, images, and scripts."
    puts "   ⚠️  This can take several minutes."
    puts ""
    
    unless Dir.exist?('_site')
      puts "❌ Error: _site directory not found. Run 'bundle exec jekyll build' first."
      exit 1
    end
    
    options = proofer_options(external: true)
    
    begin
      HTMLProofer.check_directory('./_site', options).run
      puts "\n✅ Full link check complete! No broken links found."
    rescue StandardError => e
      puts "\n❌ Link check failed with errors."
      exit 1
    end
  end
end

desc "Check links in the built site (alias for check_links:internal)"
task check_links: 'check_links:internal'

private

def fetch_pr_info(pr_number)
  uri = URI("https://api.github.com/repos/department-of-veterans-affairs/vets-design-system-documentation/pulls/#{pr_number}")
  
  begin
    response = Net::HTTP.get_response(uri)
    
    if response.code == '200'
      JSON.parse(response.body)
    else
      puts "❌ GitHub API Error: #{response.code} - #{response.message}"
      nil
    end
  rescue StandardError => e
    puts "❌ Network Error: #{e.message}"
    nil
  end
end

def get_current_user
  # Try to get user from git config first
  git_user = `git config user.login 2>/dev/null`.strip
  
  if git_user.empty?
    # If no git user.login, try to get from GitHub API using git remote
    remote_url = `git config --get remote.origin.url`.strip
    if remote_url.match(/github\.com[\/:]([^\/]+)\//)
      # For now, we'll need the user to set their GitHub username in git config
      puts "💡 Tip: Set your GitHub username with: git config user.login YOUR_GITHUB_USERNAME"
      puts "❌ Could not determine GitHub username from git config"
      return nil
    end
  else
    # Validate user exists on GitHub
    uri = URI("https://api.github.com/users/#{git_user}")
    begin
      response = Net::HTTP.get_response(uri)
      if response.code == '200'
        return JSON.parse(response.body)
      else
        puts "❌ GitHub user '#{git_user}' not found"
        return nil
      end
    rescue StandardError => e
      puts "❌ Error validating user: #{e.message}"
      return nil
    end
  end
  
  nil
end

def get_open_prs
  uri = URI("https://api.github.com/repos/department-of-veterans-affairs/vets-design-system-documentation/pulls?state=open&per_page=100")
  
  begin
    response = Net::HTTP.get_response(uri)
    
    if response.code == '200'
      JSON.parse(response.body)
    else
      puts "❌ GitHub API Error: #{response.code} - #{response.message}"
      nil
    end
  rescue StandardError => e
    puts "❌ Network Error: #{e.message}"
    nil
  end
end

def get_pr_reviews(pr_number)
  uri = URI("https://api.github.com/repos/department-of-veterans-affairs/vets-design-system-documentation/pulls/#{pr_number}/reviews")
  
  begin
    response = Net::HTTP.get_response(uri)
    
    if response.code == '200'
      JSON.parse(response.body)
    else
      puts "❌ GitHub API Error for PR #{pr_number} reviews: #{response.code} - #{response.message}"
      nil
    end
  rescue StandardError => e
    puts "❌ Network Error: #{e.message}"
    nil
  end
end

def get_latest_reviews_by_user(reviews)
  # Group reviews by user and get the latest review from each user
  reviews_by_user = reviews.group_by { |review| review['user']['login'] }
  
  reviews_by_user.map do |user, user_reviews|
    user_reviews.max_by { |review| Time.parse(review['submitted_at']) }
  end
end

def run_command(command)
  puts "   Running: #{command}"
  
  result = system(command)
  
  unless result
    raise "Command failed: #{command}"
  end
  
  puts "   ✅ Success"
end
