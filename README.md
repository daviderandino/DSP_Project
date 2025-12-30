# Laboratory Activity 1 - JSON Schemas and REST APIs

The structure of this repository is the following:

- [json-schemas](/json-schemas) contains the design of the JSON Schemas;
- [rest-api-design](rest-api-design) contains the OpenAPI document describing the design of the REST APIs;
- [film-manager-implementation](film-manager-implementation) contains the Film Manager service application, implemented starting from the server stub automatically generated with Swagger Editor on the basis of the designed REST APIs.

# Film Manager - DSP Lab 01 Extended

## Database Updates
To run this solution, you must extend the `databaseV1.db` file with the following columns in the `reviews` table:
1. `invitationStatus`: TEXT (default 'pending')
2. `expirationDate`: TEXT (Datetime string)

SQL:
```sql
ALTER TABLE reviews ADD COLUMN invitationStatus TEXT DEFAULT 'pending';
ALTER TABLE reviews ADD COLUMN expirationDate TEXT;