
//const yelpEndpoint = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${this.term}&location=${this.location}&sort_by=${this.sortBy}`
const apiKey = 'WWM1dKNQ1Revyt8D235kKNN0dlKCcvtwIqCLiufL9EcXP6HGpzNxyIOspmJfu2WWUt74ihFYinu4g4VtBy1D8p_pOfpypbarIDbBvg-_RsrMCEmCTzIPJK7EmQ_xYnYx';
const clientId = 'YYt6XIUe5nOYox-jCrheXA'

const Yelp = {
    search(term, location, sortBy){
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
            headers: {
                Authorization: `Bearer ${apiKey}`
            }
        }).then(response => {
            return response.json()
        }).then(jsonResponse => {
            if(jsonResponse.businesses){
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location['address1'] ,
                        city: business.location['city'],
                        state: business.location['state'],
                        zipCode: business.location['zip_code'],
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count

                    }
                }); 
            }
        })
    }
}

export default Yelp