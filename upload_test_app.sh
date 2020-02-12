echo "git config --name"
git config --global user.name "kraksin"

echo "git config --email"
git config --global user.name "kraksin12@gmail.com"

echo "clone git SSH"
git clone git@github.com:operate2v/operate2v.github.io.git

echo "get ipa to iOS"
cd ios && cp contentsfly_adhoc.ipa ../operate2v.github.io/contentfly/ && cd .. && cd ..

echo "get apk to Android"
cd android/app/build/outputs/apk/release && cp app-release.apk ../../../../../../ && cd ../../../../../../

echo "git add"
cd .. && git add *

echo "git commit"
git commit -m "contentsfly test add [CircleCI]"

echo "git push"
git push origin master
