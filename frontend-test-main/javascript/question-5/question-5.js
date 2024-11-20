// ***DO NOT EDIT THIS PART
function randomString() {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < 5) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
}

const userIds = [];
const userNames = [];
const userPhotos = [];
for (let i = 1; i <= 100000; i++) {
    userIds.push(i);
    userNames.push({ userId: i, name: randomString() });
    userPhotos.push({ userId: i, photo: `${randomString()}.png` });
}
// DO NOT EDIT THIS PART***

function generateUsersDetail(userIds, userNames, userPhotos) {
    // const result = [];

    // userIds.forEach((userId) => {
    //     result.push({
    //         userId,
    //         fullName: userNames?.find(uD => uD.userId === userId)?.name || '',
    //         photo: userPhotos?.find(uD => uD.userId === userId)?.photo || '',
    //     })
    // })
    // return result;
    const userNameM = new Map(userNames.map(u => [u.userId, u.name]));
    const userPhotosM = new Map(userPhotos.map(u => [u.userId, u.photo]));

    return userIds.map(userId => ({
        userId,
        fullName: userNameM.get(userId) || '',
        photo: userPhotosM.get(userId) || ''
    }))
}

// ***DO NOT EDIT THIS PART
console.time('generateUsersDetail');
generateUsersDetail(userIds, userNames, userPhotos);
console.timeEnd('generateUsersDetail');
// DO NOT EDIT THIS PART***