-**install dependencies**:npm i or npm install
-**start server**:npm run dev

1. **get_scenario**
   - **Method**: GET
   - **URL**: http://localhost:9493/api/v1/scenario/66487aa10db22942d7db508e
   - **Description**: This is a GET request used to retrieve data from an endpoint. It expects a `200 OK` status in response.

2. **get_scenarios**
   - **Method**: GET
   - **URL**: http://localhost:9493/api/v1/get-scenarios/
   - **Description**: This is a GET request used to retrieve data from an endpoint. It expects a `200 OK` status in response.

3. **get_vehicles**
   - **Method**: GET
   - **URL**: http://localhost:9493/api/v1/get-vehicles/
   - **Description**: This is a GET request used to retrieve data from an endpoint. It expects a `200 OK` status in response.

4. **scenario**
   - **Method**: POST
   - **URL**: http://localhost:9493/api/v1/post-scenario
   - **Description**: This is a POST request submitting JSON data. Expects a `200 OK` or `201 Created` response.

5. **vehicle**
   - **Method**: POST
   - **URL**: http://localhost:9493/api/v1/post-vehicle/6649f3509a875e0d6682e82c
   - **Description**: This is a POST request submitting JSON data. Expects a `200 OK` or `201 Created` response.

6. **update scenario**
   - **Method**: PATCH
   - **URL**: http://localhost:9493/api/v1/scenario/66487aa10db22942d7db508e
   - **Description**: This is a PATCH request used to update an existing data entry. Expects a `200 OK`, `201 Created`, or `204 No Content` response.

7. **delete_vehicle**
   - **Method**: DELETE
   - **URL**: http://localhost:9493/api/v1/vehicle/66487bfd5fd47a8200cd0f02
   - **Description**: This is a DELETE request used to delete a vehicle entry. Expects a `200 OK`, `202 Accepted`, or `204 No Content` response.

8. **delete_scenario**
   - **Method**: DELETE
   - **URL**: http://localhost:9493/api/v1/scenario/6647abd310840aece8b30a11
   - **Description**: This is a DELETE request used to delete a scenario entry. Expects a `200 OK`, `202 Accepted`, or `204 No Content` response.
