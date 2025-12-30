class Review{    
    constructor(filmId, reviewerId, completed, reviewDate, rating, review, invitationStatus, expirationDate) {
        this.filmId = filmId;
        this.reviewerId = reviewerId;
        this.completed = completed;
        
        if(invitationStatus)
            this.invitationStatus = invitationStatus;
        if(expirationDate)
            this.expirationDate = expirationDate;

        if(reviewDate)
            this.reviewDate = reviewDate;
        if(rating)
            this.rating = rating;
        if(review)
            this.review = review;
        
        var selfLink = "/api/films/public/" + this.filmId + "/reviews/" + this.reviewerId;
        this.self =  selfLink;
    }
}

module.exports = Review;