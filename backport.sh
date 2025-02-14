git reset HEAD~1
rm ./backport.sh
git cherry-pick 7402c3148877893f3c7ba715c887c286d9e6ab40
echo 'Resolve conflicts and force push this branch'
