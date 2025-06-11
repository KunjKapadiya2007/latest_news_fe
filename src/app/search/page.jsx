'use client'

import React, {Suspense} from 'react';
import SearchResults from "../../components/search/SearchResults";

function Page() {
    return (
        <>
            <Suspense fallback={<div>Loading search results...</div>}>
            <SearchResults />
            </Suspense>
        </>
    );
}

export default Page;