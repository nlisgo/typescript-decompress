## Setup

```bash
git clone git@github.com:nlisgo/typescript-decompress.git
cd typescript-decompress
```

## Install dependencies

```bash
nvm use
yarn install
```

## Download Meca file

```bash
aws s3 cp --request-payer requester s3://transfers-elife/biorxiv_Current_Content/March_2024/13_Mar_24_Batch_1915/b01a6a3f-6e1e-1014-a493-bfddfb011b98.meca ./content.meca
```

## Extract Meca with [decompress](https://github.com/kevva/decompress) to decompress folder

```bash
yarn decompress
```

## Extract Meca with [unzipper](https://github.com/ZJONSSON/node-unzipper) to unzipper folder

```bash
yarn unzipper
```
