import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, HelpCircle, Image, LayoutGrid, Settings, User, Upload, Search, List, Filter, BarChart2, Hourglass, CheckCircle } from 'lucide-react';
import ImageDetailModal from './ImageDetailModal';

const DatasetPage = () => {
  const [ongoingTask, setOngoingTask] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [dataset, setDataset] =  useState("My Dataset")
  const handleImageClick = (imageData) => {
    setSelectedImage(imageData);
  };

  const navigate = useNavigate();

  const handleProjectsClick = () => {
    navigate('/');
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className="flex flex-col h-screen text-white font-sans">
    {/* App bar covering full width */}
    <header className="bg-[#7E58BC] p-4 flex justify-between items-center w-full">
      <div className="flex items-center">
        {/* Logo moved to app bar */}
        <svg viewBox="0 0 16 16" className="h-8 w-8 mr-4" fill="currentColor">
        <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
        </svg>
        <h1 className="text-xl font-bold">Platform Name</h1>
      </div>
      <div className="flex gap-4">
        <button className="text-white"><Bell size={20} /></button>
        <button className="text-white"><HelpCircle size={20} /></button>
      </div>
    </header>

    <div className="flex flex-1">
      {/* Sidebar with only Projects, Settings, and Profile */}
      <div className="w-64 bg-[#1E293B] p-5">
        <nav>
          <ul className="list-none p-0">
            <li className="mb-2">
              <a href="#" onClick={handleProjectsClick} className="flex items-center text-white no-underline p-2 rounded-md hover:bg-[#7E58BC]"><LayoutGrid size={18} className="mr-2" /> Projects</a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-white no-underline p-2 rounded-md hover:bg-[#7E58BC]"><Settings size={18} className="mr-2" /> Settings</a>
            </li>
            <li className="mb-2">
              <a href="#" className="flex items-center text-white no-underline p-2 rounded-md hover:bg-[#7E58BC]"><User size={18} className="mr-2" /> Profile</a>
            </li>
          </ul>
        </nav>
      </div>
      

      <div className="flex flex-col flex-1 bg-[#0B1021]">
      
        <div className="bg-[#0B1021] p-4 flex justify-between items-center">
          <div className="flex gap-2 text-4xl">{dataset}</div>
          <div className="flex items-center gap-2">
            <button className="bg-[#7E58BC] text-white p-3 rounded-full"><Upload size={16} /></button>
            <button className="bg-[#7E58BC] text-white px-4 py-2 rounded-full">Tasks</button>
          </div>
        </div>
        <div className="h-px bg-[#7E58BC]"></div>
        <div className="flex flex-1 p-5 gap-5">
          <div className="flex-grow">
            <h2 className="text-xl font-bold mb-2">About Dataset:</h2>
            <p className="mb-4">Behhe bahha buhhu blehhe</p>
            <div className="relative mb-4">
              <input type="text" placeholder="Search" className="w-full bg-black text-white p-2 pl-10 rounded-full" />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
            <div className="flex gap-2 mb-4">
              <button className="bg-[#0B1021] p-2 rounded-full"><List size={18} /></button>
              <button className="bg-[#0B1021] p-2 rounded-full"><Filter size={18} /></button>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-black h-36 flex items-center justify-center rounded-md cursor-pointer" onClick={() => handleImageClick({
                  filename: `IMG_00${item}.jpg`,
                  class: 'XYZ',
                  size: '5 mb',
                  resolution: '1920x1080',
                  annotated: 'No',
                  tags: ['Bleh', 'bleh', 'bleh'],
                })}>
                  <Image size={48} />
                </div>
              ))}
            </div>
          </div>
          <div className="w-px h-full bg-[#7E58BC]"></div>
          
          <div className="w-1/4 flex flex-col gap-5">
            <div className="bg-[#0B1021] p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">Details</h3>
              <ul className="list-none p-0">
                <li className="flex justify-between mb-2"><span>Number of Images</span><span>-</span></li>
                <li className="flex justify-between mb-2"><span>Classes</span><span>-</span></li>
                <li className="flex justify-between mb-2"><span>Size</span><span>-</span></li>
                <li className="flex justify-between mb-2"><span>Split</span><span>-</span></li>
              </ul>
              <div className="mt-4">
                <h3 className="text-lg font-bold flex items-center gap-2 mb-2"><BarChart2 size={18} /> Stats</h3>
              </div>
              <button className="w-full bg-purple-700 text-white p-2 rounded-md mt-4">Annotate</button>
            </div>
            
            <div className="w-full h-px bg-[#7E58BC]"></div>
            
            <div className="bg-[#0B1021] p-4 rounded-md">
              <h3 className="text-lg font-bold mb-2">Tasks</h3>
              <ul>

                <li><div className="flex items-center gap-2 mb-2">
                <Hourglass className={`${ongoingTask ? 'animate-spin' : ''}`} size={20} />
                <span>Processing images</span>
              </div></li>
              <div className="w-px h-full bg-[#7E58BC]"></div>
              <li>
              <div className="flex items-center gap-2">
                <CheckCircle size={20} />
                <span>Annotation complete</span>
              </div>
              </li>
              <div className="w-px h-full bg-[#7E58BC]"></div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <ImageDetailModal image={selectedImage} onClose={closeModal} />
    </div>
    </div>
  );
};

export default DatasetPage;