// @generated automatically by Diesel CLI.

diesel::table! {
    history (id) {
        id -> Int4,
        produk -> Varchar,
        quantity -> Int4,
        cash_in -> Int8,
        bought -> Nullable<Timestamp>,
    }
}

diesel::table! {
    inventory (id) {
        id -> Int4,
        produk -> Varchar,
        variant -> Varchar,
        price -> Int4,
        stock -> Int4,
        bought -> Int8,
    }
}

diesel::table! {
    users (id) {
        id -> Int4,
        username -> Varchar,
        pass -> Varchar,
        previlage -> Bool,
    }
}

diesel::allow_tables_to_appear_in_same_query!(
    history,
    inventory,
    users,
);
