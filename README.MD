<!-- PROJECT SHIELDS -->
[![Contributors](https://img.shields.io/github/contributors/ArturVargas/ticklens.js)](https://github.com/ArturVargas/ticklens.js/contributors)
[![Forks](https://img.shields.io/github/forks/ArturVargas/ticklens.js?style=plastic)](https://github.com/ArturVargas/ticklens.js/forks)
[![Issues](https://img.shields.io/github/issues/ArturVargas/ticklens.js)](https://github.com/ArturVargas/ticklens.js/issues)
![Github package.json version](https://img.shields.io/github/package-json/v/ArturVargas/ticklens.js.svg)
[![GitHub license](https://img.shields.io/github/license/ArturVargas/ticklens.js.svg)](https://github.com/ArturVargas/ticklens.js/blob/master/LICENSE)

<br/>
<div align="center">
  <a href="https://github.com/">
    <img alt="logo" src="ticklens.png" width="170" height="100" />
  </a>
  <h3 align="center">Ticklens.js</h3>

  <p align="center">
    An awesome JavaScript SDK to create your ticket platform over
    <a href="https://docs.lens.xyz/docs"> Lens protocol api</a>!
    <br />
    <a href="https://github.com/ArturVargas/ticklens.js"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/ArturVargas/ticklens.js">View Demo</a>
    ·
    <a href="https://github.com/ArturVargas/ticklens.js/issues">Report Bug</a>
    ·
    <a href="https://github.com/ArturVargas/ticklens.js/issues">Request Feature</a>
  </p>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

There are many great Ticket platforms around the internet, but Ticklens is the first ticket solution for decentralize ticket platforms using the lens infrastructure that  allows to everyone create any kind of ticket apps quickly and easily.  

We take some inspiration from [lens.js](https://lensjs.suhailkakar.com/) and [lenster](https://lenster.xyz/)  

Why use this library?
* Your time should be focused on creating something amazing. A project  that solves a problem and helps others.
* You shouldn't creating the same tasks over and over like creating query's or mutation's.
* You should implement DRY principles to the rest of your life :smile:  

> Currently the library is using `MUMBAI TESTNET` API.  

### Build With

* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![Graphql](https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white)
* ![Urql](https://img.shields.io/badge/Urql-121D33?logo=urqldotcom&logoColor=fff&style=for-the-badge)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->
## Getting Started

Ticklens.js is a JavaScript SDK or a API wrapper for the Lens API.  

Ticklens.js simplify the process of creating a social media app one more step.  

It is a simple, easy to use, and powerful API for interacting with Lens Protocol.  

> You can use Ticklens.js on node server, browser, or mobile.

<br/>

You can install Ticklens.js either using NPM and YARN.  

Inside your project directory, run the following command:

```sh
npm install ticklens
```

Or with `yarn`:

```sh
yarn add ticklens
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->
## Usage

Using Ticklens.js is way easier, you can import the library in your project and use it.

```js
import { Ticklens } from 'ticklens';
```

## Create Lens Profile

Creating a profile on `MAINNET` is not currently available, this endpoint only works on `TESTNET`  

### API Operation

Here is an example of how to create a new lens profile:

```js

let lens_handler = "my_unique_handler";
const profilePictureUri = "ipfs/image/uri";
const authToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9";

Ticklens.CreateProfile(lens_handler, profilePictureUri, authToken)
  .then(response) => {
    console.log(response);
  }
```

### API Response

```json
{
  "data": {
    "txHash": "0xd771b9b8fd558eda20598e8a464cc9cc9e28f4bd75e823d30ee276dd590cd67e"
  },
  "operation": {
    ...
  }
}
```

## Login

Login is basic functionality of every social application. In order to authenticate a user on Lens Protocol, you need to use two APIs. The first one is to generate a challenge from the server and seconds one is to sign that challenge using your wallet and send it back to server.  

If the signature matches, the server will return a access token and refresh token and that can be used to authenticate the user.  

## Generate a challenge

You must request a challenge form the Lens server by providing the your wallet address and the server responds with a text that can be later signed by the your wallet to prove the ownership.  

### API Operation

Here is an example of how to generate a challenge:

```js

let address = "0x123...678";

Ticklens.GetChallenge(address)
  .then(response) => {
    console.log(response);
  }
```

### API Response

```json
{
  "data": {
    "challenge": {
      "text": "I want to authenticate with lens and generate a JWT token at timestamp - 1645102996447. Auth request id - 6a01ffa229be678f03d705eb9b4c454554e2cef4be2c273fc0c9ed5be8762625"
    }
  }
}
```

## Sign Challenge

Once you recieved a challenge from Lens' server, you can sign the challenge using your wallet and send it back to the server with your address.

In return, you will get a access token and refresh token from the server.

- The access token will be used to authenticate the user and the refresh token will be used to generate a new access token when the old one expires.

- The `access token` will expire after 30 minutes and the `refresh token` will expire after 1 days.

### API Operation

Here is an example of how to send a signed challenge to the server: send a signed challenge to the server:

```js

let address = "0x123...678";

Ticklens.Authenticate(address, signedMessage)
  .then(response) => {
    console.log(response);
  }
```

### API Response

```json
{
  "data": {
    "authenticate": {
      "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4YjE5QzI4OTBjZjk0N0FEM2YwYjdkN0U1QTlmZkJjZTM2ZDNmOWJkMiIsInJvbGUiOiJub3JtYWwiLCJpYXQiOjE2NDUxMDQyMzEsImV4cCI6MTY0NTEwNjAzMX0.lwLlo3UBxjNGn5D_W25oh2rg2I_ZS3KVuU9n7dctGIU",
      "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjB4YjE5QzI4OTBjZjk0N0FEM2YwYjdkN0U1QTlmZkJjZTM2ZDNmOWJkMiIsInJvbGUiOiJyZWZyZXNoIiwiaWF0IjoxNjQ1MTA0MjMxLCJleHAiOjE2NDUxOTA2MzF9.2Tdts-dLVWgTLXmah8cfzNx7sGLFtMBY7Z9VXcn2ZpE"
    }
  }
}
```
<!-- ROADMAP -->
## Roadmap

<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->
## License

Distributed under the Apache-2.0 License. See `LICENSE` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->
## Contact

Arturo - [0x-Vato](https://twitter.com/0xVato)

<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [Choose an Open Source License](https://choosealicense.com)
