// use std::io;

// fn main() {
//     println!("Hello, world");

//     let mut input = String::new();

//     io::stdin().read_line(&mut input).expect("failed to read line");
//     println!("{}", input);
// }

// fn main() {
//     let x: u8 = 9; // 0 - 255
//     let y: i8 = 10; //(-128) - 127
//     let z = x + y;
//     println!("{}", z);
// }

// use std::io;

// fn main() {
//     let mut input = String::new();
//     io::stdin().read_line(&mut input).expect("expected to read line");

//     let int_input: i64 = input.trim().parse().unwrap();

//     println!("{}", int_input + 2);
// }

fn main() {
    let cond = (2 as f32) <= 2.2;
    println!("{}", cond);
}

