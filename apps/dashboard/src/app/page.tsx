"use client"

import { useState } from "react"

import { Button } from "@dcrgll/ui"

interface Data {
  message: string
}

export default function HomePage() {
  const [data, setData] = useState<Data | null>(null)

  const getData = async () => {
    try {
      const res = await fetch("http://localhost:8081/healthz", {
        method: "GET",
        headers: {
          "Content-Type": "application/json"
        }
      })

      const data = (await res.json()) as Data

      setData(data)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <main className="flex h-screen flex-col items-center">
      Hello world!
      <div className="flex flex-col items-center">
        <Button onClick={() => getData()}>Button</Button>
        This is the user dashboard.
        {data && <p>{data.message}</p>}
      </div>
    </main>
  )
}
