# Fondik

This project takes care of advertisment calling and it's proper functioning.

## Getting started

Clone the repository and then download the dependencies by running:

- `npm install`

Run the webpack bundler by typing:

- `npm run build`

This will bundle the whole code, which then can be found in `/dist/main.js`. Copying this code into a `<script>` tag at the end of the `<body>` tag of the fondik website will implement all the changes.

## Call Seznam Ads

```js
const sznAdManager = new fondik.SeznamAds();

// Desktop ads
new fondik.StickySky();
sznAdManager.addZone(0).addZone(5).addZone(4).addZone(2).addZone(3).callAds();

// Mobile ads
sznAdManager.addZone(6).addZone(7).addZone(8).callAds();
```

## Authors

- **David Vodrážka** - _Initial work_ - [DaveVodrazka](https://github.com/DaveVodrazka)

## License

This project is licensed under the ISC License.
