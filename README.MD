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

## Publication

Publications are the lifeblood of the Lens Protocol. They are all of the original content, comments, and mirrors produced by creators, curators, and users alike. Publications come in three primary types: posts, comments, and mirrors. Posts are the base object, with mirror and comment providing additional functionality.

## Metadata Standards

All Metadata standards we set are supported on OpenSea and other marketplaces.
[See more](https://docs.lens.xyz/docs/metadata-standards)

### API Operation

Some developers get confused when getting started on what is valid metadata and what is not. They miss a property or pass in a wrong type which is hard to debug if you do this. This endpoint allows you to pass in the metadata and see if it's valid, if it is not valid it tells you why.

```js

const metadata = {...};

Ticklens.GetMetadataValidation(metadata)
  .then(response) => {
    console.log(response);
  }
```

### API Response Success

```json
{
  "data": {
    "validatePublicationMetadata": {
      "valid": true,
      "reason": null
    }
  }
}
```

### API Response Fail

```json
{
  "data": {
    "validatePublicationMetadata": {
      "valid": false,
      "reason": "Invalid metadata version - should be 2.0.0"
    }
  }
}
```

## Publish an Event

It's a post with no collect module announcing the event

### API Operation

Here is an example of how to create an event (Post):

```js

const eventData = {
    profileId: "0x03",
    contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl",
    collectModule: {
      revertCollectModule: true
    },
    referenceModule: {
      followerOnlyReferenceModule: false
    }
  }

Ticklens.PublishEvent(eventData, accessToken)
  .then(response) => {
    console.log(response);
  }
```

### API Response

```json
{
  "data": {
    "createPostTypedData": {
      "id": "18ad653a-af18-4be5-9246-06be8dcaf3f9",
      "expiresAt": "2022-02-21T13:00:37.000Z",
      "typedData": {
        "types": {
          "PostWithSig": [
            {
              "name": "profileId",
              "type": "uint256"
            },
            {
              "name": "contentURI",
              "type": "string"
            },
            {
              "name": "collectModule",
              "type": "address"
            },
            {
              "name": "collectModuleInitData",
              "type": "bytes"
            },
            {
              "name": "referenceModule",
              "type": "address"
            },
            {
              "name": "referenceModuleInitData",
              "type": "bytes"
            },
            {
              "name": "nonce",
              "type": "uint256"
            },
            {
              "name": "deadline",
              "type": "uint256"
            }
          ]
        },
        "domain": {
          "name": "Lens Protocol Profile",
          "chainId": 80001,
          "version": "1",
          "verifyingContract": "0x23C1ce2b0865406955Da08F1D31c13fcc3f72A3a"
        },
        "value": {
          "nonce": 0,
          "deadline": 1645448437,
          "profileId": "0x03",
          "contentURI": "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl.json",
          "collectModule": "0x45B7907d5c5d2aF9157898601B7B3e18670891c3",
          "collectModuleInitData": "0x",
          "referenceModule": "0x0000000000000000000000000000000000000000",
          "referenceModuleInitData": "0x"
        }
      }
    }
  }
}
```

## Create Tickets from the event

It's a post with limited fee collect module that works as a ticket.

### API Operation

Here is an example of how to create a batch of tickets(Post):

```js

const ticketsData = {
    profileId: "0x03",
    contentURI: "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl",
    maxTickets: 100, // max number of tickets to collect
    currency: "0x2058A9D7613eEE744279e3856Ef0eAda5FCbaA7e", // USDC
    ticketPrice: "20",
    recipient: "0x123...678", // user wallet
    referralFee: 1, // 0 to 100 in percentage
    followerOnly: true, // true by default
  }

Ticklens.CreateTickets(ticketsData, accessToken)
  .then(response) => {
    console.log(response);
  }
```

### API Response

```json
{
  "data": {
    "createPostTypedData": {
      "id": "18ad653a-af18-4be5-9246-06be8dcaf3f9",
      "expiresAt": "2022-02-21T13:00:37.000Z",
      "typedData": {
        "types": {
          "PostWithSig": [
            {
              "name": "profileId",
              "type": "uint256"
            },
            {
              "name": "contentURI",
              "type": "string"
            },
            {
              "name": "collectModule",
              "type": "address"
            },
            {
              "name": "collectModuleInitData",
              "type": "bytes"
            },
            {
              "name": "referenceModule",
              "type": "address"
            },
            {
              "name": "referenceModuleInitData",
              "type": "bytes"
            },
            {
              "name": "nonce",
              "type": "uint256"
            },
            {
              "name": "deadline",
              "type": "uint256"
            }
          ]
        },
        "domain": {
          "name": "Lens Protocol Profile",
          "chainId": 80001,
          "version": "1",
          "verifyingContract": "0x23C1ce2b0865406955Da08F1D31c13fcc3f72A3a"
        },
        "value": {
          "nonce": 0,
          "deadline": 1645448437,
          "profileId": "0x03",
          "contentURI": "ipfs://QmPogtffEF3oAbKERsoR4Ky8aTvLgBF5totp5AuF8YN6vl.json",
          "collectModule": "0x45B7907d5c5d2aF9157898601B7B3e18670891c3",
          "collectModuleInitData": "0x",
          "referenceModule": "0x0000000000000000000000000000000000000000",
          "referenceModuleInitData": "0x"
        }
      }
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
