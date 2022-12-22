# MiniBE_CRUD_BookStoreProject

### Database

```bash
npx sequelize-cli model:generate --name penjual --attributes nama:string,email:string,no_telepon:integer,alamat:string,bukuId:integer

npx sequelize-cli model:generate --name pembeli --attributes nama:string,email:string,alamat:string,bukuId:integer

npx sequelize-cli model:generate --name buku --attributes nama:string,harga:integer,foto:string,stock:integer

```
