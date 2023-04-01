import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Landing } from '../Landing';
import { ChatRoom } from '../ChatRoom';
import React, { Component }  from 'react';

function AuthenticatedApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/room/:id" element={<ChatRoom />} />
            </Routes>
        </BrowserRouter>
    );
}

export { AuthenticatedApp };
