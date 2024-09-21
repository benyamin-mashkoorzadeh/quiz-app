export async function GET() {
    const res = await fetch('https://dummyjson.com/posts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const data = await res.json()

    console.log(data)

    return Response.json({data})
}
