# TPO server API docs

Start the server with `pnpm dev`

## API routes

Base URL - `http://localhost:3000/api/v1`

### User

- `GET` _/users/data_ : returns... nothing ?
- `POST` _/users/login-user_ : user signin
- `POST` _/users/register-user_ : user signup
- `POST` _/users/verify-user_: user verification

### Admin

- `GET` _/admin/approve-user/&lt;userId&gt;_ : verify the user by the spuulied __&lt;userId&gt;__
- `POST` _/admin/login-admin_ : admin signin
- `POST` _/admin/register-admin_ : admin signup
- `POST` _/admin/verify-admin_: admin verification

### Recruiter

- `GET` _/recruiters/approve-user/&lt;userId&gt;_ : verify the user by the spuulied __&lt;userId&gt;__
- `POST` _/recruiters/login-recruiter_ : recruiters signin
- `POST` _/recruiters/register-recruiter_ : recruiters signup
- `POST` _/recruiters/verify-recruiter_: recruiters verification

### Job

- `GET` _/jobs/_ : Get all jobs
- `POST` _/jobs/_ : create new job

- `GET` _/jobs/&lt;jobId&gt;_ : Get job details of a particular job
- `PUT` _/jobs/&lt;jobId&gt;_ : Update an existing job
- `DELETE` _/jobs/&lt;jobId&gt;_ : Delete an existing job
  
- `POST` _/jobs/&lt;jobId&gt;/apply/_: Apply for the job

### Student

- `GET` _/students_ : Get all student profiles
- `POST` _/students_ :Create new student profiles
- `GET` _/students/&lt;studentId&gt;_ : Get a specific student profile
- `PUT` _/students/&lt;studentId&gt;_ : Update your student profile
- `DELETE` _/students/&lt;studentId&gt;_ : Delete a specific student profile (admins only)

## Testing

### [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client)

Install the Thunder Client vscode extension and import the [thunder-collection.json](/thunder-collection.json) file in it to test the collection

### [Httpie](https://httpie.io)

Install httpie cli

```sh
pip install httpie
```

#### User routes

- `GET` _/users/data_ : returns... nothing ?
  > U need to be logged in

  ```sh
  http :3000/api/v1/users/data 'authtoken:Bearer <token received on login>' 
  ```

- `POST` _/users/login-user_ : user signin
  > Requires Admin Approval before login

  ```sh
  http POST :3000/api/v1/users/login-user email=nafees.rayyan@gmail.com password=admin
  ```

- `POST` _/users/register-user_ : user signup

  ```sh
  http POST :3000/api/v1/users/register-user name=admin username=admin email=nafees.rayyan@gmail.com
  password=admin facultyNo=admin enrollmentNo=admin
  ```

- `POST` _/users/verify-user_: user verification

  ```sh
  http POST :3000/api/v1/users/verify-user email=nafees.rayyan@gmail.com otp=829496
  ```

#### Admin routes

- `GET` _/admin/approve-user/&lt;userId&gt;_ : verify the user by the spuulied __&lt;userId&gt;__

- `POST` _/admin/login-admin_ : admin signin
  > Requires Admin Approval before login

  ```sh
  http POST :3000/api/v1/users/login-user email=nafees.rayyan@gmail.com password=admin
  ```

- `POST` _/admin/register-admin_ : admin signup

  ```sh
  http POST :3000/api/v1/users/register-user name=admin username=admin email=nafees.rayyan@gmail.com
  password=admin facultyNo=admin enrollmentNo=admin
  ```

- `POST` _/admin/verify-admin_: admin verification

  ```sh
  http POST :3000/api/v1/users/verify-user email=nafees.rayyan@gmail.com otp=829496
  ```

#### Job routes

- `GET` _/jobs/_ : Get all jobs

  ```sh
  http :3000/api/v1/jobs 
  ```

- `GET` _/jobs/&lt;jobId&gt;_ : Get job details of a particular job

  ```sh
  http :3000/api/v1/jobs/<jobId>
  ```

- `POST` _/jobs/&lt;jobId&gt;/apply_: Apply for the job

   ```sh
  http POST :3000/api/v1/jobs/<jobId>/apply 'authtoken:Bearer <authToken>' 
  ```

- `POST` _/jobs/_ : create new job

  ```sh
  http POST :3000/api/v1/jobs 'authtoken:Bearer <authToken>' companyName=admin applyStart=today applyEnd=tomorrow location=nowheere logoLink=https://picsum.photos/100/100 jobLink=https://linkedin.com applyLink=https://linkedin.com
  ```

- `PUT` _/jobs/&lt;jobId&gt;_ : Update an existing job

  ```sh
  http PUT :3000/api/v1/jobs/<jobId> 'authtoken:Bearer <authToken>' companyName=admin applyStart=today applyEnd=tomorrow location=nowheere logoLink=https://picsum.photos/100/100 jobLink=https://linkedin.com applyLink=https://linkedin.com
  ```

- `DELETE` _/jobs/&lt;jobId&gt;_ : Delete an existing job

  ```sh
  http DELETE :3000/api/v1/jobs/<jobId> 'authtoken:Bearer <authToken>' 
  ```

#### Student routes

- `GET` _/students_ : Get all student profiles

  ```sh
  http :3000/api/v1/students
  ```

- `POST` _/students_ :Create new student profiles

  ```sh
  http POST :3000/api/v1/students name=Avyukt 'authtoken:Brearer <token>'
  ```

- `GET` _/students/&lt;studentId&gt;_ : Get a specific student profile

  ```sh
  http :3000/api/v1/students/<profileId>
  ```

- `PUT` _/students/&lt;studentId&gt;_ : Update your student profile

  ```sh
  http PUT :3000/api/v1/students/<profileId> name=Sharjeel 'authtoken:Bearer <token>'
  ```

- `DELETE` _/students/&lt;studentId&gt;_ : Delete a specific student profile (admins only)

  ```sh
  http DELETE :3000/api/v1/students/<profileId> 'authtoken: Bearer <adminToken>'
  ```
