# git config --name
git config --global user.name "kraksin"

# git config --email
git config --global user.name "kraksin12@gmail.com"

# clone git SSH
echo "clone git SSH"
git clone git@github.com:operate2v/operate2v.github.io.git

echo "touch text"
cd operate2v.github.io && touch test.txt

echo "git add"
# git add *
cd operate2v.github.io && git add *

echo "git commit"
# git commit
cd operate2v.github.io && git commit -m "contentsfly test add [CircleCI]"

echo "git push"
# git push
cd operate2v.github.io && git push origin master


