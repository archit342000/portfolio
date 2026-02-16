
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:5176")
        page.wait_for_selector("body")

        # Verify text changes
        content = page.content()

        # Check for presence of NEW terms
        if "Contact Me" not in content:
            print("FAILURE: 'Contact Me' not found")
            exit(1)
        if "Technical Skills" not in content:
            print("FAILURE: 'Technical Skills' not found")
            exit(1)
        if "Featured Projects" not in content:
            print("FAILURE: 'Featured Projects' not found")
            exit(1)

        # Check for absence of OLD terms
        forbidden = ["Contact Protocol", "System Capabilities", "Featured Modules", "Initialize Contact"]
        for term in forbidden:
            if term in content:
                print(f"FAILURE: Forbidden term '{term}' found")
                exit(1)

        page.screenshot(path="copy_verification.png", full_page=True)
        print("SUCCESS: Copy verified and screenshot saved.")
        browser.close()

if __name__ == "__main__":
    run()
