function findTraveler(id, allTravelers) {
    let singleTraveler = allTravelers.find(traveler => {
        return traveler.id === id; 
    });

    return singleTraveler ? singleTraveler.name : 'We cannot find your information. Please create an account.'; 
};

export { findTraveler }