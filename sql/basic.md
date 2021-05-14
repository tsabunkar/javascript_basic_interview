1. Types of Join in SQL ?

- INNER JOIN: Returns records that have matching values in both tables which are joined
- LEFT (OUTER) JOIN: Returns all the records from left table & matched records from right table
- RIGHT (OUTER) JOIN: Returns all the records from right table & matched records from left table
- FULL (OUTER) JOIN: Returns all the records from both the tables (left + common + right)

2. What Aggregate Function have you used ?

- COUNT
- APPROX_COUNT_DISTINCT
- AVG
- CHECKSUM_AGG
- COUNT_BIG
- GROUPING
- GROUPING_ID
- MAX, MIN
- STDEV, STDEVP
- STRING_AGG
- SUM
- VAR, VARP

3. DML (Data Manipulation language) commands

- SELECT - Retrieves data from a table
- INSERT - Insert records into a table
- UPDATE - Update records into a table
- DELETE - Deletes records from the table

4. DDL (Data Definition language) commands

- CREATE - Creates objects(tables, fun, etc) into the db
- ALTER - Alters object of the db
- DROP - Deletes objects of the db
- TRUNCATE - Deletes all records from a table and reset table identity to inital value

5. DCL (Data Control language) commands

- GRANT - Gives user's access privileges to db
- REVOKE - Withdraws user's access privileges to db given with a GRANT command

6. SQL Constraints

- NOT NULL - Ensures that a column cannot have a NULL value
- UNIQUE - Ensures that all values in a column are different.
- PK - combination of NOT NULL & UNIQUE. Generally used as unique id's(identifiers) in a table
- FK - Ensures Relationship in child table. used to associate link between parent and child table. General refers the PK of parent table, Doesn't need to be unique or not-null
- CHECK - Ensure that all values in a column satisfies a specific condition
- DEFAULT - Sets a default value for a column when no value is specified
- INDEX - Used to create and retrieve data from the db very quickly

7. Difference between stored procedure and function

- Function :
  - A function has a return type and returns a value
  - You cannot use a function with DML queries, Only SELECT queries are allowed in functions
  - A function does not allow output parameters
  - You cannot manage transactions into a function
  - You cannot call stored procedure from a function
  - You can call a function using a select statement
- Procedures
  - A procedure does not have a return typem but it returns values using the OUT parameters
  - You can use all the DML queries
  - A procedure allows both input and output parameters
  - you can manage transactions inside a function
  - you can call a function from a stored procedure
  - you cannot call a procedure using SELECT statement
