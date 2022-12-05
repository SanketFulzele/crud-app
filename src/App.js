import React from 'react';
import Crud from './CrudApp/Crud';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from './CrudApp/CrudComponents/Read';
import Update from './CrudApp/CrudComponents/Update';
import ModalPage from './Components/ModalPage';
import DestructuringObj from './Components/DestructuringObj';
import PrevState from './Components/PrevState';
import UseCounter from './CustomHook/useCounter';
import Home from './CustomHook/Home';
import ReducerHook from './ReducerHook/ReducerHook';
import RefHook from './RefHook/RefHook';
import RefHook1 from './RefHook/RefHook1';
import LayoutEffect from './LayoutEffect.jsx/LayoutEffect';
import MemoHook from './MemoHook/MemoHook';
import CallbackHook from './CallbackHook/CallbackHook';
import ConRen from './ConditionalRendering/ConRen';
import SelfApi from './SelfApi/SelfApi';
import SelfApi1 from './SelfApi/SelfApi1';
import SelfAuth from './SelfApi/SelfAuth';
import ClinicAuth from './SelfApi/ClinicAuth';
import Storages from './Storages/Storages';
import AlertToast from './AlertToast/AlertToast';
import UpLift from './UpLift/UpLift';
import AuthAccessToken from './AuthAccessToken/AuthAccessToken';
import Material from './Material/Material';
import MyResort from './MyResort/MyResort';
import MediaQuery from './MediaQuery/MediaQuery';
import DateRange from './DateRange/DateRange';
import RangePicker from './DateRange/RangePicker';
import DatePicker from './DateRange/DatePicker';
import MatRange from './MatRange/MatRange';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
            <Route exact path="/" element={<Crud />} />
            <Route path="/read" element={<Read />} />
            <Route path="/update" element={<Update />} />
            <Route path="/modal-page" element={<ModalPage />} />
            <Route path="/objects" element={<DestructuringObj />} />
            <Route path="/prev-state" element={<PrevState />} />
            <Route path="/use-counter" element={<UseCounter />} />
            <Route path="/home" element={<Home />} />
            <Route path="/reduce" element={<ReducerHook />} />
            <Route path="/ref" element={<RefHook />} />
            <Route path="/ref1" element={<RefHook1 />} />
            <Route path="/layout-effect" element={<LayoutEffect />} />
            <Route path="/memo" element={<MemoHook />} />
            <Route path="/callback" element={<CallbackHook />} />
            <Route path="/con-ren" element={<ConRen />} />
            <Route path="/self-api" element={<SelfApi />} />
            <Route path="/self-api1" element={<SelfApi1 />} />
            <Route path="/self-auth" element={<SelfAuth />} />
            <Route path="/clinic-auth" element={<ClinicAuth />} />
            <Route path="/storages" element={<Storages />} />
            <Route path="/toast" element={<AlertToast/>} />
            <Route path="/uplift" element={<UpLift/>} />
            <Route path='tokens' element={<AuthAccessToken/>} />
            <Route path='material/:id' element={<Material/>} />
            <Route path='resort' element={<MyResort/>} />
            <Route path='media' element={<MediaQuery/>} />
            <Route path='date-range' element={<DateRange/>} />
            <Route path='range-picker' element={<RangePicker/>} />
            <Route path='date-picker' element={<DatePicker/>} />
            <Route path='matrange' element={<MatRange/>} />
      </Routes>
</BrowserRouter>
    </>
  );
}

export default App;
