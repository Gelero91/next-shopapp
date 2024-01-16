// pages/index.tsx
import React, { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import Footer from "../components/footer";
import Card from '../components/card';
import cardData from "../../data/cardData";

const cardsPerPage = 10;

const AdList = () => {
    const [currentPage, setCurrentPage] = useState(1);

    const totalPages = Math.ceil(cardData.length / cardsPerPage);
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const cardsForCurrentPage = cardData.slice(startIndex, endIndex);

    return (
        <div>
            <Header />
            <h1>Liste d'annonces</h1>

            <ul>
                {cardsForCurrentPage.map((card: CardData) => (
                    // pages/index.tsx
                    <Link href={`/ads/${card.id}`}>
                            <Card title={card.title} content={card.content} />
                    </Link>
                ))}
            </ul>

            <div>
                <p>Page {currentPage} sur {totalPages}</p>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>Précédent</button>
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === totalPages}>Suivant</button>
            </div>

            <Footer />
        </div>
    );
};

export default AdList;
