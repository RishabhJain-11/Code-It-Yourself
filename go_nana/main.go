package main

import "fmt"

func main() {
	var confName = "Go Conference"
	const confTickets = 50
	var remainingTickets = 50

	fmt.Printf("Conference Tickets is %T, remaining tickets  is %T, conference name is %T\n", confTickets, remainingTickets, confName)

	fmt.Printf("Welcome to %v booking application \n", confName)

	fmt.Printf("We have total of %v tickets and %v are still available. \n", confTickets, remainingTickets)

	fmt.Println("Get your ticket here to attend")

	var userName string
	var userTickets int
	
}
