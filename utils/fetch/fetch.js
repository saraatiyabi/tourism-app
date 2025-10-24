const fetchData = async (url, method, body, headers) => {
    const res = await fetch(url, {
        method,
        headers,
        body: JSON.stringify(body)
    })

    return res;
}

export {fetchData}