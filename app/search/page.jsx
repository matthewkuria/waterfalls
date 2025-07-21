"use client";
import React, { useState } from 'react';

const Page = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [totalMatches, setTotalMatches] = useState(0);
    const [hasSearched, setHasSearched] = useState(false);

    // Remove all highlights from previous searches
    const removeHighlights = () => {
        const highlights = document.querySelectorAll('.search-highlight');
        highlights.forEach(highlight => {
            const parent = highlight.parentNode;
            parent.replaceChild(document.createTextNode(highlight.textContent), highlight);
            parent.normalize(); // Merge adjacent text nodes
        });
    };

    // Get all text nodes in the document
    const getAllTextNodes = (element) => {
        const textNodes = [];
        const walker = document.createTreeWalker(
            element,
            NodeFilter.SHOW_TEXT,
            null,
            false
        );
        
        let node;
        while (node = walker.nextNode()) {
            // Skip text nodes that are empty or only whitespace
            if (node.nodeValue.trim().length > 0) {
                textNodes.push(node);
            }
        }
        
        return textNodes;
    };
    
    // Perform the search
    const handleSearch = () => {
        if (!searchTerm.trim()) {
            alert('Please enter a search term');
            return;
        }

        // Clear previous results and highlights
        removeHighlights();
        setResults([]);
        setTotalMatches(0);
        setHasSearched(true);

        const keywords = searchTerm.split(' ').filter(k => k.length > 0);
        const regex = new RegExp(keywords.join('|'), 'gi');
        const textNodes = getAllTextNodes(document.body);
        let matchCount = 0;
        const foundResults = [];

        textNodes.forEach(node => {
            const text = node.nodeValue;
            const matches = text.match(regex);
            
            if (matches) {
                matchCount += matches.length;
                const span = document.createElement('span');
                span.className = 'search-highlight bg-yellow-200 font-bold';
                span.textContent = node.nodeValue;
                
                // Replace the text node with our highlighted span
                node.parentNode.replaceChild(span, node);
                
                // Add to search results
                foundResults.push({
                    text: node.nodeValue,
                    matches: matches
                });
            }
        });

        setResults(foundResults);
        setTotalMatches(matchCount);
    };

    // Handle Enter key press
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="flex flex-col items-center justify-start min-h-screen p-8">
            <h1 className="text-4xl font-bold mb-4">Search Page</h1>
            <p className="text-lg mb-8">This is the search page where you can find various resources.</p>
            
            <div className="flex flex-col items-center w-full max-w-md">
                <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Search..."
                    className="input input-bordered w-full mb-4"
                />
                <button 
                    className="btn btn-primary w-full mb-8"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </div>

            {hasSearched && (
                <div className="w-full max-w-2xl bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Search Results:</h3>
                    {totalMatches > 0 ? (
                        <>
                            <p className="mb-4">Found {totalMatches} matches for "{searchTerm}"</p>
                            <div className="space-y-4">
                                {results.map((result, index) => (
                                    <div key={index} className="p-4 border-b border-gray-200 last:border-b-0">
                                        <div className="text-gray-600">
                                            {result.text.length > 100
                                                ? result.text.substring(0, 100) + '...'
                                                : result.text}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </>
                    ) : (
                        <p>No results found for "{searchTerm}"</p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Page;