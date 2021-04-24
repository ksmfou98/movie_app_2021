import Axios from "axios";
import React, { useEffect, useState } from "react";
import "./favorite.css";

const FavoritePage = () => {
  const [Favorites, setFavorites] = useState([]);

  useEffect(() => {
    Axios.post("/api/favorite/getFavoredMovie", {
      userFrom: localStorage.getItem("userId"),
    }).then((response) => {
      if (response.data.success) {
        console.log(response.data.favorites);
        setFavorites(response.data.favorites);
      } else {
        alert("영화 정보를 가져오는데 실패 했습니다.");
      }
    });
  }, []);

  return (
    <div style={{ width: "85%", margin: "3rem auto" }}>
      <h2> Favorite Movies </h2>
      <hr />

      <table>
        <thead>
          <tr>
            <th>Movie Title</th>
            <th>Movie RunTime</th>
            <td>Remove from favorites</td>
          </tr>
        </thead>
        <tbody>
          {Favorites.map((favorite, index) => (
            <tr key={index}>
                <td>{favorite.movieTitle}</td>
                <td>{favorite.movieRunTime}</td>
                <td>
                    <button>
                        Remove
                    </button>
                </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FavoritePage;
