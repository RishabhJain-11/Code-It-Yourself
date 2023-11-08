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

// fn main() {
//     let cond = (2 as f32) <= 2.2;
//     println!("{}", cond);
// }

// fn main() {
//     // let condition = (2 as f32) <= 2.2;
//     // let condition2 = false && condition;
//     // print!("{}", condition2);

//     let food = "cookie";

//     if food == "cookie" {
//         println!("I like cookies too!");
//     } else {
//         println!("Oh no :(");
//     }
// }

// fn main() {
//     println!("Hello");
//     test();
// }

// fn test() {
//     print!("Test has been called...");
// }

// fn main() {
//     println!("Hello, world!");
//     let result = add_numbers(10, 17);
//     println!("{}", result);
// }

// fn add_numbers(x: i32, y: i32) -> i32 {
//     let result = x + y;
//     if result > 10 {
//         return result - 10;
//     }
//     result
// }

fn main() {
    let vec1: Vec<i32> = Vec::new();
    let mut vec2: Vec<i32> = vec![1,2,3,4];
    vec2.push(5);
    println!("1st : {}", vec2[0]);

    let second: &i32 = &vec2[1];
    match vec2.get(1) {
        Some(second) => println!()
    }
}