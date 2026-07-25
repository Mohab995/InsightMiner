from fastapi import APIRouter, HTTPException

from app.services.review_fetcher import fetch_reviews

router = APIRouter(
    prefix="/reviews",
    tags=["Reviews"],
)


@router.get("/{package_name}")
def get_reviews(package_name: str):

    data = fetch_reviews(package_name)

    if not data:
        raise HTTPException(
            status_code=404,
            detail="No reviews found or invalid package name.",
        )

    return {
        "package": package_name,
        "count": len(data),
        "reviews": data,
    }