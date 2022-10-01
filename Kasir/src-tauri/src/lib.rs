#![allow(non_snake_case)]

use self::models::{NewUser, Users};
use diesel::pg::PgConnection;
use diesel::prelude::*;

pub mod models;
pub mod schema;

pub fn establish_connection() -> PgConnection {
    let database_url = "postgres://postgres:suweseru@localhost/tauri";
    PgConnection::establish(&database_url)
        .unwrap_or_else(|_| panic!("Error connecting to {}", database_url))
}

pub fn create_user(conn: &mut PgConnection, username: &str, pass: &str) -> Users {
    use crate::schema::users;
    let new_user = NewUser { username, pass };
    diesel::insert_into(users::table)
        .values(&new_user)
        .get_result(conn)
        .expect("error saving query")
}
