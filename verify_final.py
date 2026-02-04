
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:5176")
        page.wait_for_selector("body")
        # Ensure HUD elements are GONE
        if page.query_selector(".hud-text"):
            print("FAILURE: HUD text found")
            exit(1)
        if page.query_selector(".bg-grid-pattern"):
            print("FAILURE: Grid pattern found")
            exit(1)

        page.screenshot(path="final_verification.png", full_page=True)
        print("SUCCESS: Screenshot saved to final_verification.png")
        browser.close()

if __name__ == "__main__":
    run()
