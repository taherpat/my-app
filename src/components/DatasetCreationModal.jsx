import React, { useState } from 'react';
import { X , Upload} from 'lucide-react';

const licenses = ['MIT', 'Apache 2.0', 'GPL-3.0', 'BSD-3-Clause', 'CC BY 4.0'];
const tasks = ['Segmentation', 'Detection', 'Classification', 'Instance Segmentation', 'Keypoint Detection'];

function DatasetCreationModal({ onClose, onCreateDataset }) {
  const [name, setName] = useState('');
  const [license, setLicense] = useState('');
  const [collaborators, setCollaborators] = useState('');
  const [selectedTasks, setSelectedTasks] = useState([]);
  const [classes, setClasses] = useState('');
  const [tags, setTags] = useState('');
  const [isPrivate, setIsPrivate] = useState(false);
  const [images, setImages] = useState([]);
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    setImages(files)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    const newDataset = {
      name,
      license,
      collaborators: collaborators.split(',').map(email => email.trim()),
      tasks: selectedTasks,
      classes: classes.split(',').map(cls => cls.trim()),
      tags: tags.split(',').map(tag => tag.trim()),
      isPrivate,
      images: images,
    };
    onCreateDataset(newDataset);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-gray-800 p-6 rounded-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Create New Dataset</h2>
          <button onClick={onClose}><X size={24} /></button>
          
        </div>
        <form onSubmit={handleSubmit}>
          <input
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            placeholder="Dataset Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <select
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            value={license}
            onChange={(e) => setLicense(e.target.value)}
            required
          >
            <option value="">Select License</option>
            {licenses.map(lic => (
              <option key={lic} value={lic}>{lic}</option>
            ))}
          </select>
          <input
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            placeholder="Collaborator Emails (comma-separated)"
            value={collaborators}
            onChange={(e) => setCollaborators(e.target.value)}
          />
          <div className="mb-2">
            {tasks.map(task => (
              <label key={task} className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedTasks.includes(task)}
                  onChange={() => {
                    setSelectedTasks(prev => 
                      prev.includes(task) 
                        ? prev.filter(t => t !== task)
                        : [...prev, task]
                    );
                  }}
                />
                <span className="ml-2">{task}</span>
              </label>
            ))}
          </div>
          <input
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            placeholder="Classes (comma-separated)"
            value={classes}
            onChange={(e) => setClasses(e.target.value)}
          />
          <input
            className="w-full p-2 mb-2 bg-gray-700 rounded"
            placeholder="Tags (comma-separated)"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
          />
          <div className="mb-4 w-25% ">
          <label className="block text-sm font-medium mb-2">Upload Images</label>
          <div className="flex items-center justify-center w-15">
            <label className="w-full flex flex-col items-center px-2 py-4 bg-gray-700 text-white rounded-lg shadow-lg tracking-wide uppercase border border-[#7E58BC] cursor-pointer hover:bg-[#7E58BC] hover:text-white">
              <Upload className="w-6 h-6" />
              <span className="mt-2 text-base leading-normal">Select files</span>
              <input type='file' className="hidden" onChange={handleImageUpload} multiple accept=".zip,image/*" />
            </label>
          </div>
        </div>
          <label className="flex items-center mb-4">
            <input
              type="checkbox"
              checked={isPrivate}
              onChange={(e) => setIsPrivate(e.target.checked)}
              disabled={true} // Disabled for free users
            />
            
            <span className="ml-2">Private (Premium feature)</span>
          </label>
          <p className="text-sm text-gray-400 mb-4">{images.length} files selected</p>
          <button type="submit" className="w-full p-2 bg-[#7E58BC] rounded">Create Dataset</button>
        </form>
      </div>
    </div>
  );
}

export default DatasetCreationModal;