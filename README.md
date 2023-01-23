## Project Setup Steps

### Clone Project Repository
```
git clone https://github.com/pabin/iclinics.git
cd iclinics
```

### Setting up node and yarn

- Install nvm and node:

> NOTE: Restart terminal after nvm installation

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
nvm install 18.13.0
nvm use 18
```

- Install yarn:

```
npm install -g yarn@1.22.19
```

### Install dependencies and start project
```
yarn
yarn start:dev
```

### Run Tests
```
yarn test:cov

```

### AWS lambda deployment
> Warning: Should have logged in to aws cli
```
yarn deploy
```

### Serverless deployment local test
```
yarn deploy:local
```

> NOTE: For aws deployment via circle ci, aws credentials shoud be setup either in project environment variables or circleCI context

### `Available functionalities`

* Search by name <br />
* Search by state name <br />
* Search by opening time and closing time <br />
* Search by all query fields <br />

### Demo examples
```
https://x2xsnts3zulqm3e4b6ihcqovqa0hxoux.lambda-url.ap-south-1.on.aws/clinics/?name=clinic
```
```
https://x2xsnts3zulqm3e4b6ihcqovqa0hxoux.lambda-url.ap-south-1.on.aws/clinics/?state=fl
```
```
https://x2xsnts3zulqm3e4b6ihcqovqa0hxoux.lambda-url.ap-south-1.on.aws/clinics/?name=clinic&state=ca
```
```
https://x2xsnts3zulqm3e4b6ihcqovqa0hxoux.lambda-url.ap-south-1.on.aws/clinics/?openingFrom=10:00&openingTo=23:00
```

### Screenshots
### Postman Response result
![ScreenShot](https://github.com/pabin/iclinics/blob/main/src/assets/screenshots/iclinics_img1.png?raw=true)

### CircleCI workflow for CI/CD
![ScreenShot](https://github.com/pabin/iclinics/blob/main/src/assets/screenshots/iclinics_img2.png?raw=true)

### Unit Test Results with 100% coverage
![ScreenShot](https://github.com/pabin/iclinics/blob/main/src/assets/screenshots/iclinics_img3.png?raw=true)