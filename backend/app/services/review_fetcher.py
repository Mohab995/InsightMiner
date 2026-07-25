from google_play_scraper import reviews, Sort
from app.schemas.review import Review


def fetch_reviews(package_name: str, count: int = 100):
    try:
        result, _ = reviews(
            package_name,
            lang="en",
            country="us",
            sort=Sort.NEWEST,
            count=count,
        )

        mapped_reviews = []

        for item in result:
            mapped_reviews.append(
                Review(
                    author=item["userName"],
                    rating=item["score"],
                    content=item["content"],
                    likes=item["thumbsUpCount"],
                    version=item.get("appVersion"),
                    date=item["at"],
                )
            )

        return mapped_reviews

    except Exception as e:
        print(f"Error fetching reviews: {e}")
        return []