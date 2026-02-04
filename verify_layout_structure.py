
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:5176")
        page.wait_for_selector("body")

        # Verify 3 main sections exist
        sections = page.query_selector_all("section")
        # Currently we expect 3 main sections in Home.jsx
        # Hero, Projects, TechStack+CTA
        if len(sections) < 3:
            print(f"FAILURE: Expected at least 3 sections, found {len(sections)}")
            exit(1)

        # Verify scroll snap properties
        container = page.query_selector(".snap-y.snap-mandatory")
        if not container:
            print("FAILURE: Scroll snap container not found")
            exit(1)

        page.screenshot(path="layout_verification.png", full_page=True)
        print("SUCCESS: Layout verified and screenshot saved.")
        browser.close()

if __name__ == "__main__":
    run()
