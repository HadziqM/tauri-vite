use crate::schema::users;
use diesel::{prelude::*, sql_types::Timestamp};

#[derive(Queryable)]
pub struct Users {
    pub id: i32,
    pub username: String,
    pub pass: String,
    pub previlage: bool,
}
#[derive(Queryable)]
pub struct Inventory {
    pub id: i32,
    pub produk: String,
    pub variant: String,
    pub price: i128,
    pub stock: i32,
    pub bought: i32,
}
#[derive(Queryable)]
pub struct History {
    pub id: i32,
    pub poduk: String,
    pub quantity: i32,
    pub bought: Timestamp,
}
#[derive(Insertable)]
#[diesel(table_name = users)]
pub struct NewUser<'a> {
    pub username: &'a str,
    pub pass: &'a str,
}
