from google_play_scraper import reviews, Sort


def fetch_reviews(package_name: str, count: int = 100):
    result, _ = reviews(
        package_name,
        lang="en",
        country="us",
        sort=Sort.NEWEST,
        count=count,
    )

    return result