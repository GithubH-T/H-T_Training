import { useState } from "react";
import './AlbumList.css';


function AlbumList() {

    let [photos,setPhotos] = useState([]);//in order to trigger the re-render, use-state
    let [albumid,setAlbumid] = useState(1);

    function find(){
        if (albumid > 0){
            getAlbums();
        }
    }


    if(!photos.length){
        getAlbums();
    }
    async function getAlbums() {
        const photos = await (await fetch("https://jsonplaceholder.typicode.com/photos?_page=1")).json();//why twice
        console.log(photos);
        setPhotos(photos);
    }
    return(
        <div>
            <input type = "number" placeholder = "ID" onChange={(event) => setAlbumid({value: event.target.value})}></input>
                <button onClick={find}>
                    Search
                </button>
            
            <table>
                <thead>
                    <tr>
                    <td>ID</td>
                    <td>TITLE</td>
                    <td>URL</td>
                    <td>ThumbnailURL</td>
                    <td>ALBUM-ID</td>
                    </tr>
                </thead>

                <tbody>
                    {
                        photos.map(function(photo){
                        // console.log(photo);
                        return<tr><td>{photo.id}</td>
                                  <td>{photo.title}</td>
                                  <td><a href = {photo.url}>Link</a></td>
                                  <td><a href = {photo.thumbnailUrl}>Link</a></td>
                                  <td>{photo.albumId}</td>
                              </tr>
                        })
                    }
                </tbody>
            
            </table>
        </div>
    )
}

export default AlbumList;