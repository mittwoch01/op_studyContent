import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from '../component/Main';
// import Company from '../page/Company';
import Review from '../component/Review';
import Product from '../component/Product';
import Event from '../component/Event';
import {Manual, Person, Rule, Etc} from '../page/Company';

export default function RouterPage() {
  return (
    <Routes>
      {/* <Route /> 화면에 노출될 페이지들의 목록 */}
      <Route path="" element={<Main />} />
      <Route path="/" element={<Main />} />
      <Route path="/main" element={<Main />} />
      <Route path="/manual" element={<Manual />} />
      <Route path="/person" element={<Person />} />
      <Route path="/rule" element={<Rule />} />
      <Route path="/product" element={<Product />} />
      <Route path="/event" element={<Event />} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  )
}


// 'react-router-dom' -> {BroserRouter, Routes, Route}