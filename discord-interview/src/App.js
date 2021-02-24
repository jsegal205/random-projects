import React, { useState } from "react";
import Modal from "react-modal";
import "./App.css";

const App = () => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const [isModalOpen, setModalOpen] = useState(false);
  const [serverName, setServerName] = useState("");
  const [serverList, setServerList] = useState({});
  const [selectedServer, setSelectedServer] = useState("");
  const [chatVal, setChat] = useState("");

  return (
    <div className="App">
      <button onClick={() => setModalOpen(true)}>open the modal!</button>
      <Modal
        isOpen={isModalOpen}
        style={customStyles}
        onRequestClose={() => setModalOpen(false)}
        contentLabel="Discord Modal"
      >
        <h2>Server</h2>
        <button onClick={() => setModalOpen(false)}>close</button>
        <div className="container">
          <div>
            <h3>Add a server</h3>
            <div className="server">
              <label>
                Add a new Server
                <input
                  type="text"
                  value={serverName}
                  onChange={(e) => setServerName(e.target.value)}
                />
                <button
                  onClick={() =>
                    setServerList({
                      ...serverList,
                      [serverName]: {
                        chat: [],
                      },
                    })
                  }
                >
                  Add new server
                </button>
              </label>
              {!!Object.keys(serverList).length ? (
                <ul>
                  {Object.keys(serverList).map((server) => {
                    return (
                      <li
                        style={{
                          border: serverList[server].selected
                            ? "2px solid green"
                            : "none",
                        }}
                        onClick={() => setSelectedServer(server)}
                      >
                        {server}
                      </li>
                    );
                  })}
                </ul>
              ) : null}
            </div>
          </div>
          <div>
            <h3>Chat</h3>
            {!!selectedServer ? (
              <>
                {serverList[selectedServer].chat.map((c) => (
                  <p>{c}</p>
                ))}
                <input
                  type="text"
                  placeholder="type here"
                  value={chatVal}
                  onChange={(e) => setChat(e.target.value)}
                />
                <button
                  onClick={() => {
                    setServerList({
                      ...serverList,
                      [selectedServer]: {
                        ...serverList[selectedServer],
                        chat: [...serverList[selectedServer].chat, chatVal],
                      },
                    });
                  }}
                >
                  send
                </button>
              </>
            ) : (
              <div>Click a server from the list on the left to chat</div>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default App;
