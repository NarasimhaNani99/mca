const Products = () => {
    const cars = ["benz", "BMW", "VW", "TATA", "Maruti", "Mahindra"]

    const students = [
        {
            name: "Tester",
            parentNo: 1234567890,
            mobile: 9876543210,
        },

        {
            name: "Aditya",
            parentNo: 3948570120,
            mobile: 918734698,
        },

        {
            name: "Surya",
            parentNo: 498758740,
            mobile: 209384,
        }
    ]


    return (
        <>
            {
                cars.map((car) => {
                    return (
                        <h1>{car}</h1>
                    )
                })
            }

            {
                students.map((person) => {
                    return (
                        <h1>User name is = {person.name} --- Mobile - {person.mobile}</h1>
                    )
                })
            }
        </>
    )
}

export default Products;