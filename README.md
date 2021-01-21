
Gudlines/Description


1. Backend
    - Run backend: from in 'backend' folder run npm start
    - APIs
        * Because we needed to retrieve data from 3rd party so I splitted the API into 2 different APIs
        * 3rdParty - Proxy to the images data
        * local - deal with local data like user's favorites

    - dal
        * Function 'find' to get favorite for specific user
        * Function 'upsert' to update/add favorite for user
    
    - database
        - A json file that hold the user's favorites data
    
    - Rest APIs
        - /Images                           GET - retrieve images
        - /images/:imageId/favorites        PUT - set favorite for user
        - /images/favorites                 GET - get all favorites for user


2. Frontend
    - Run frontend: from in 'frontend' folder run npm start
    - ImageDetails      - for displaying image info like favorite/description/image
    - LineImages        - for displaying images (3/other) in line 
    - Results           - for displaying images in cunck of lines

    - Callbacks for getImages/setFavorite
    - APIs service to fetch http requests
    - Tests - Did tests for App and ImageDetails components
