
from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        page.goto("http://localhost:5176")
        page.wait_for_selector("body")

        # Verify TechStack header with updated text
        if not page.query_selector("text=Technical Skills"):
            print("FAILURE: 'Technical Skills' header not found")
            exit(1)

        # Verify a specific skill exists
        if not page.query_selector("text=PyTorch"):
            print("FAILURE: 'PyTorch' skill not found")
            exit(1)

        print("SUCCESS: TechStack verified with professional copy.")
        browser.close()

if __name__ == "__main__":
    run()
