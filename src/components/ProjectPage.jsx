import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LayoutGrid, Settings, User, Plus } from 'lucide-react';
import DatasetCard from './DatasetCard';
import addProject from '../assets/addProject.svg';
import DatasetCreationModal from './DatasetCreationModal';

// Dataset class definition
class Dataset {
  constructor(name, classes, imageCount = 0) {
    this.name = name;
    this.classes = classes;
    this.imageCount = imageCount;
    this.createdAt = new Date();
  }
}

function ProjectPage() {
  const [datasets, setDatasets] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAddDataset = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleCreateDataset = (datasetDetails) => {
    const newDataset = new Dataset(
      datasetDetails.name,
      datasetDetails.classes,
      0 // Initial image count is 0
    );
    setDatasets([...datasets, newDataset]);
    setIsModalOpen(false);
  };

  const handleDatasetClick = (dataset) => {
    // Navigate to the dataset page
    navigate(`/dataset/${dataset.name}`);
  };

  return (
    <div className="flex h-screen bg-gray-900 text-white overflow-auto">
      {/* Sidebar */}
      <div className="w-48 bg-gray-800 p-4 overflow-auto">
        {/* ... (sidebar content remains the same) ... */}
        {/* Sidebar */}
        <div className=" bg-gray-800 overflow-auto">
          <div className="flex justify-center mb-8 overflow-hidden">
            <svg viewBox="0 0 16 16" className="w-8 h-8 text-white " fill="currentColor">
              <path fillRule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
            </svg>
          </div>
          
          <nav className='h-full flex-1 w-fit'>
            <ul className="space-y-2">
              <li>
                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded w-full">
                  <LayoutGrid size={18} />
                  <span>Projects</span> 
                  <button> 
                    <img className=' flex w-5 h5 hover-fill-purple ml-0' src ={addProject} alt ='Add Project'></img>
                    </button>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded w-full truncate">
                  <Settings size={18} />
                  <span>Settings</span>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center space-x-2 py-2 px-4 hover:bg-gray-700 rounded w-full truncate">
                  <User size={18} />
                  <span>Profile</span>
                </a>
              </li>
            </ul>
          </nav>
      
      </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        <h1 className="text-3xl font-bold mb-6">Datasets</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {datasets.map((dataset, index) => (
            <div key={index} onClick={() => handleDatasetClick(dataset)}>
              <DatasetCard dataset={dataset} />
            </div>
          ))}
          <button
            onClick={handleAddDataset}
            className="flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          >
            <Plus size={36} className="mb-2 " />
            <span>Add Dataset</span>
          </button>
        </div>
      </div>

      {isModalOpen && (
        <DatasetCreationModal
          onClose={handleCloseModal}
          onCreateDataset={handleCreateDataset}
        />
      )}
    </div>
  );
}

export default ProjectPage;