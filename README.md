# Labtech

End user friendly status page using .json files generated from zabbix powered [Dr. Z](https://github.com/lvlup-pro/dr-z) or any other app generating simple .json files.

## Demo

[http://lvlup-pro.github.io/labtech](http://lvlup-pro.github.io/labtech)

## Why?

SaaS status pages are expensive for startups and private needs.
Labtech gives you more elastic approach.

## How to run dev

```bash
npm install
npm run dev
```

Then go to [http://127.0.0.1:9000](http://127.0.0.1:9000) in your browser

## How to deploy

```bash
npm install
npm run build
```

Then you need to copy:

- build
- assets
- index.html
- config.json
- hosts.json 

To your favourite static hosting. Custom .sh script could be helpful

## TODO

- News and info about maintenance
- Uptime chart
- RSS
- More locales (i18n)

## License

MIT

## I like this, how can I help?

Feel free to make PR, submit bugs on github issues or donate via PayPal to info at lvlup.pro
