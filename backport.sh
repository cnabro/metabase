git reset HEAD~1
rm ./backport.sh
git cherry-pick cfda0fb8ed44659a0e3a88267f9611251b27d53d
echo 'Resolve conflicts and force push this branch'
