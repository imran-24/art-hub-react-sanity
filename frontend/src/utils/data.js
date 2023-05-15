

export const searchQuery = (searchTerm) => {
    const query = `*[_type == "pin" && title match '${searchTerm}*' || category match '${searchTerm}*' || about match '${searchTerm}*']{
          image{
            asset->{
              url
            }
          },
              _id,
              destination,
              postedBy->{
                _id,
                userName,
                image
              },
              save[]{
                _key,
                postedBy->{
                  _id,
                  userName,
                  image
                },
              },
            }`;
    return query;
  };

  export const feedQuery = `*[_type == "deviation"] | order(_createdAt desc) {
    image{
      asset->{
        url
      }
    },
        _id,
        title,
        description,
        postedBy->{
          _id,
          userName,
          profilePic
        },
        save[]{
          _key,
          postedBy->{
            _id,
            userName,
            profilePic
          },
        },
        comment[]{
            comment,
            _key,
            postedBy->{
              _id,
              userName,
              profilePic
            },
          }
      } `;

      export const postQuery = `*[_type == "post"] | order(_createdAt desc) {
            _id,
            message,
            postedBy->{
              _id,
              userName,
              profilePic
            },
            save[]{
              _key,
              postedBy->{
                _id,
                userName,
                profilePic
              },
            },
            like[]{
              _key,
              postedBy->{
                _id,
                userName,
                profilePic
              },
            },
            comment[]{
                comment,
                _key,
                postedBy->{
                  _id,
                  userName,
                  profilePic
                },
              }
          } `;
